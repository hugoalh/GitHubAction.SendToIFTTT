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

A GitHub action to send data to IFTTT applet via webhook, support variables.

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
- Support variables to create dynamic/rich content.

## 🛠 Configuration

### 🏗 Environment

#### Operating System

Any

#### Software

- NodeJS v12
- NPM v6+

### 📥 Input

#### Not Support Variable

- **`webhook_key`:** `<string.secret>` IFTTT webhook key.
  > To obtain it, click `Menu` > `My Services` > `Webhooks` > `Settings`, your key is at `Account Info` > `URL` and after `https://maker.ifttt.com/use/`.
  > 
  > <img align="center" src="https://i.imgur.com/ihnqN5B.png" />
  > 
  > To regenerate it, click `Edit`.
- **`variable_list_external` \[Optional\]:** `<object.json>` External variable list that will use in the data. Can import from other actions' output.
- **`variable_prefix` \[Optional\]:** `<string = "%">` Variable prefix.
- **`variable_suffix` \[Optional\]:** `<string = "%">` Variable suffix.
- **`variable_join` \[Optional\]:** `<string = "_">` Variable join if the variable list has depth.

#### Support Variable

- **`webhook_eventname`:** `<string>` IFTTT webhook event name, create from applet "Receive A Web Request - Event Name", keep in lower-case to prevent issue.
- **`value1` \[Optional\]:** `<string>` IFTTT default ingredient namespace.
- **`value2` \[Optional\]:** `<string>` IFTTT default ingredient namespace.
- **`value3` \[Optional\]:** `<string>` IFTTT default ingredient namespace.

To use GitHub Action context variable list, use placeholder `"${{github.event.<namespace>}}"` in the workflow file (parse by GitHub Action), or use placeholder `"<variable_prefix>payload<variable_join><namespace><variable_suffix>"` in the workflow file which marked "Support Variable" (parse by this action).

To use external variable list, use placeholder `"<variable_prefix>external<variable_join><namespace><variable_suffix>"` in the workflow file which marked "Support Variable" (parse by this action).

### 📤 Output

*(N/A)*

### Example

```yaml
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
          value1: "Hello, world!"
          # value2:
          # value3:
          # variable_list_external:
          variable_prefix: "%"
          variable_suffix: "%"
          variable_join: "."
```

### 📚 Guide

- [GitHub: Webhook event payloads](https://docs.github.com/en/developers/webhooks-and-events/webhook-events-and-payloads)
- [GitHub Actions: Creating and storing encrypted secrets](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)
