# \[GitHub Action\] Send To IFTTT

<details>
  <summary><a href="https://github.com/hugoalh/GitHubAction.SendToIFTTT"><code>hugoalh/GitHubAction.SendToIFTTT</code></a></summary>
  <img align="center" alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/hugoalh/GitHubAction.SendToIFTTT?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Top Langauge" src="https://img.shields.io/github/languages/top/hugoalh/GitHubAction.SendToIFTTT?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Repo Size" src="https://img.shields.io/github/repo-size/hugoalh/GitHubAction.SendToIFTTT?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Code Size" src="https://img.shields.io/github/languages/code-size/hugoalh/GitHubAction.SendToIFTTT?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Watcher" src="https://img.shields.io/github/watchers/hugoalh/GitHubAction.SendToIFTTT?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Star" src="https://img.shields.io/github/stars/hugoalh/GitHubAction.SendToIFTTT?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Fork" src="https://img.shields.io/github/forks/hugoalh/GitHubAction.SendToIFTTT?logo=github&logoColor=ffffff&style=flat-square" />
</details>

A GitHub action to send data to IFTTT webhook applet.

<table>
  <tr>
    <td><a href="./LICENSE.md"><b>License</b></a></td>
    <td>MIT</td>
  </tr>
  <tr>
    <td><a href="https://github.com/hugoalh/GitHubAction.SendToIFTTT/releases"><b>Release</b></a> <img align="center" src="https://img.shields.io/github/downloads/hugoalh/GitHubAction.SendToIFTTT/total?label=%20&style=flat-square" /></td>
    <td>
      <b>Latest:</b> <img align="center" src="https://img.shields.io/github/release/hugoalh/GitHubAction.SendToIFTTT?sort=semver&label=%20&style=flat-square" /> (<img align="center" src="https://img.shields.io/github/release-date/hugoalh/GitHubAction.SendToIFTTT?label=%20&style=flat-square" />)<br />
      <b>Pre:</b> <img align="center" src="https://img.shields.io/github/release/hugoalh/GitHubAction.SendToIFTTT?include_prereleases&sort=semver&label=%20&style=flat-square" /> (<img align="center" src="https://img.shields.io/github/release-date-pre/hugoalh/GitHubAction.SendToIFTTT?label=%20&style=flat-square" />)
    </td>
  </tr>
  <tr>
    <td><a href="https://github.com/hugoalh/GitHubAction.SendToIFTTT/graphs/contributors"><b>Contributor</b></a> <img align="center" src="https://img.shields.io/github/contributors/hugoalh/GitHubAction.SendToIFTTT?label=%20&style=flat-square" /></td>
    <td><ul>
        <li><a href="https://github.com/hugoalh">hugoalh</a></li>
        <li><a href="https://github.com/hugoalh-studio">hugoalh Studio</a></li>
    </ul></td>
  </tr>
  <tr>
    <td><a href="https://github.com/hugoalh/GitHubAction.SendToIFTTT/issues?q=is%3Aissue"><b>Issue</b></a></td>
    <td><img align="center" src="https://img.shields.io/github/issues-raw/hugoalh/GitHubAction.SendToIFTTT?label=%20&style=flat-square" /> : <img align="center" src="https://img.shields.io/github/issues-closed-raw/hugoalh/GitHubAction.SendToIFTTT?label=%20&style=flat-square" /></td>
  </tr>
  <tr>
    <td><a href="https://github.com/hugoalh/GitHubAction.SendToIFTTT/pulls?q=is%3Apr"><b>Pull Request</b></a></td>
    <td><img align="center" src="https://img.shields.io/github/issues-pr-raw/hugoalh/GitHubAction.SendToIFTTT?label=%20&style=flat-square" /> : <img align="center" src="https://img.shields.io/github/issues-pr-closed-raw/hugoalh/GitHubAction.SendToIFTTT?label=%20&style=flat-square" /></td>
  </tr>
  <tr>
    <td><b>Code Quality</b></td>
    <td>
      <a href="https://www.codefactor.io/repository/github/hugoalh/githubaction.sendtoifttt"><img align="center" alt="CodeFactor Grade" src="https://img.shields.io/codefactor/grade/github/hugoalh/GitHubAction.SendToIFTTT?logo=codefactor&logoColor=ffffff&style=flat-square" /></a>
      <a href="https://lgtm.com/projects/g/hugoalh/GitHubAction.SendToIFTTT/alerts"><img align="center" alt="LGTM Alert" src="https://img.shields.io/lgtm/alerts/g/hugoalh/GitHubAction.SendToIFTTT?label=%20&logo=lgtm&logoColor=ffffff&style=flat-square" /></a>
      <a href="https://lgtm.com/projects/g/hugoalh/GitHubAction.SendToIFTTT/context:javascript"><img align="center" alt="LGTM Grade" src="https://img.shields.io/lgtm/grade/javascript/g/hugoalh/GitHubAction.SendToIFTTT?logo=lgtm&logoColor=ffffff&style=flat-square" /></a>
    </td>
  </tr>
</table>

## 📜 Description

### 🌟 Feature

- Simple setup.
- Support variable to create dynamic/rich content.

## 🛠 Configuration

### 🏗 Environment

#### Operating System

Any

#### Software

- NodeJS (>= v12.13)
- NPM (>= v6.12)

### 📥 Input

| **Legend** | **Description** |
|:---:|:----|
| \[V\] | Support variable. |

To use variable in the supported argument, follow the pattern:

| **Category** | **Workflow File (Parse Via GitHub Machine/Runner)** | **Workflow File (Parse Via Action)** |
|:---:|:---:|:---:|
| External | *(N/A)* | `"<variable_prefix>external<variable_join><namespace><variable_suffix>"` |
| GitHub Event Webhook Payload | `"${{github.event.<namespace>}}"` | `"<variable_prefix>payload<variable_join><namespace><variable_suffix>"` |

#### `webhook_eventname`

**\[V\]** `<string>` IFTTT webhook event name, create from applet "Receive A Web Request - Event Name"; Recommended to keep in lower case to prevent issue.

#### `webhook_key`

`<string.secret>` IFTTT webhook key; To obtain it, click "Menu" > "My Services" > "Webhooks" > "Settings", your key is at "Account Info" > "URL" and after `https://maker.ifttt.com/use/`; To regenerate it, click "Edit".

<img align="center" src="https://i.imgur.com/ihnqN5B.png" width="384px"/>

#### `variable_join`

**\[Optional\]** `<string = "_">` Variable join if the variable list has depth.

#### `variable_list_external`

**\[Optional\]** `<object.json>` External variable list that will use in the data; Can import from other action's output.

#### `variable_prefix`

**\[Optional\]** `<string = "%">` Variable prefix.

#### `variable_suffix`

**\[Optional\]** `<string = "%">` Variable suffix.

#### `value1`

**\[Optional\] \[V\]** `<string>` IFTTT default ingredient namespace.

#### `value2`

**\[Optional\] \[V\]** `<string>` IFTTT default ingredient namespace.

#### `value3`

**\[Optional\] \[V\]** `<string>` IFTTT default ingredient namespace.

### 📤 Output

*(N/A)*

### Example

```yml
jobs:
  send-to-ifttt:
    name: "Send To IFTTT"
    runs-on: "ubuntu-latest"
    steps:
      - id: "send-to-ifttt-main"
        uses: "hugoalh/GitHubAction.SendToIFTTT@v2.0.0"
        with:
          webhook_eventname: "say_hello"
          webhook_key: "${{secrets.IFTTT_WEBHOOK_KEY}}"
          variable_join: "."
          # variable_list_external:
          variable_prefix: "%"
          variable_suffix: "%"
          value1: "Hello, world!"
          # value2:
          # value3:
```

### 📚 Guide

- [GitHub Actions: Enabling debug logging](https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/enabling-debug-logging)
- [GitHub Actions: Encrypted secrets](https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets)
- [GitHub: Webhook events and payloads](https://docs.github.com/en/free-pro-team@latest/developers/webhooks-and-events/webhook-events-and-payloads)
