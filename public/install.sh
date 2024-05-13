#!/bin/sh

set -eu

maybe_sudo() {
	if [ "$(whoami)" = "root" ]; then
		"$@"
	elif type sudo >/dev/null; then
		sudo -E "$@"
	else
		echo "Sorry, either root or 'sudo' is required."
		return 1
	fi
}

remote_script() {
	if type curl >/dev/null; then
		(curl -1sLf "$1" || echo "exit 1") | maybe_sudo bash
	elif type wget >/dev/null; then
		(wget -q -O - "$1" || echo "exit 1") | maybe_sudo bash
	else
		echo "Sorry, one of 'curl' or 'wget' is required."
		return 1
	fi
}

if [ "$(uname -r | grep -c Microsoft)" -eq 1 ]; then
	echo "It looks like you are using WSL1 which is unsupported by Modular."
	echo "We recommend switching your Linux distribution to run with WSL2 instead."
	echo "See https://learn.microsoft.com/en-us/windows/wsl/install#upgrade-version-from-wsl-1-to-wsl-2 to learn how to switch to WSL2."
	exit 1
fi

if [ "$(uname)" = "Linux" ] && [ -f /etc/debian_version ]; then
	remote_script "https://dl.modular.com/${URL_SLUG:-public/installer}/setup.deb.sh"
	maybe_sudo apt install -yq --reinstall modular
elif [ "$(uname)" = "Linux" ] && type rpm >/dev/null && type dnf >/dev/null; then
	remote_script "https://dl.modular.com/${URL_SLUG:-public/installer}/setup.rpm.sh"
	maybe_sudo dnf -yq install modular ||
		(maybe_sudo dnf -q list installed modular >/dev/null 2>&1 &&
			maybe_sudo dnf -yq reinstall modular)
elif [ "$(uname)" = "Linux" ] && type rpm >/dev/null && type yum >/dev/null; then
	remote_script "https://dl.modular.com/${URL_SLUG:-public/installer}/setup.rpm.sh"
	maybe_sudo yum -yq install modular ||
		(maybe_sudo yum -q list installed modular >/dev/null 2>&1 &&
			maybe_sudo yum -yq reinstall modular)
elif [ "$(uname)" = "Darwin" ]; then
	UNAME_MACHINE="$(/usr/bin/uname -m)"
	if [ "${UNAME_MACHINE}" = "arm64" ]; then
		if [ -z "$(command -v brew)" ]; then
			echo "Homebrew not detected. Please install homebrew from https://brew.sh/"
			exit 1
		else
			echo "Updating Homebrew"
			brew update
			echo "Installing/upgrading Modular using Homebrew"
			if brew ls --versions modular >/dev/null; then
				brew upgrade modularml/packages/modular
			else
				brew install modularml/packages/modular
			fi
		fi
	else
		echo "抱歉，基于 Intel 的 Mac 目前不支持Modular ，请到 https://www.mojocn.org/manual/getstarted/getmojo 查看支持的系统。"
		exit 1
	fi
else
	echo "对不起，无法识别此系统. 请到 https://www.mojocn.org/manual/getstarted/getmojo 查看支持的系统。"
	exit 1
fi

cat <<EOF
Welcome to the Modular CLI!

To get started, see:
文档 - https://mojocn.org/
社区 - https://mojoo.org/

For info about this tool, type "modular --help".
EOF