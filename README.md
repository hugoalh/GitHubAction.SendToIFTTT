# \[GitHub Action\] Send To IFTTT

[`hugoalh/GitHubAction.SendToIFTTT`](https://github.com/hugoalh/GitHubAction.SendToIFTTT)

[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh/GitHubAction.SendToIFTTT?logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh/GitHubAction.SendToIFTTT/graphs/contributors)
[![License](https://img.shields.io/github/license/hugoalh/GitHubAction.SendToIFTTT?logo=github&logoColor=ffffff&style=flat-square)](./LICENSE.md)
![GitHub Language Count](https://img.shields.io/github/languages/count/hugoalh/GitHubAction.SendToIFTTT?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Top Langauge](https://img.shields.io/github/languages/top/hugoalh/GitHubAction.SendToIFTTT?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Repo Size](https://img.shields.io/github/repo-size/hugoalh/GitHubAction.SendToIFTTT?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Code Size](https://img.shields.io/github/languages/code-size/hugoalh/GitHubAction.SendToIFTTT?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Watchers](https://img.shields.io/github/watchers/hugoalh/GitHubAction.SendToIFTTT?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Stars](https://img.shields.io/github/stars/hugoalh/GitHubAction.SendToIFTTT?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Forks](https://img.shields.io/github/forks/hugoalh/GitHubAction.SendToIFTTT?logo=github&logoColor=ffffff&style=flat-square)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh/GitHubAction.SendToIFTTT?logo=codefactor&logoColor=ffffff&style=flat-square)](https://www.codefactor.io/repository/github/hugoalh/githubaction.sendtoifttt)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/g/hugoalh/GitHubAction.SendToIFTTT.svg?label=%20&logo=lgtm&logoColor=ffffff&style=flat-square)](https://lgtm.com/projects/g/hugoalh/GitHubAction.SendToIFTTT/alerts)
[![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/g/hugoalh/GitHubAction.SendToIFTTT.svg?logo=lgtm&logoColor=ffffff&style=flat-square)](https://lgtm.com/projects/g/hugoalh/GitHubAction.SendToIFTTT/context:javascript)

| **[Release](https://github.com/hugoalh/GitHubAction.SendToIFTTT/releases)** ![](https://img.shields.io/github/downloads/hugoalh/GitHubAction.SendToIFTTT/total?style=flat-square&color=000000&label=%20) | **[Issue](https://github.com/hugoalh/GitHubAction.SendToIFTTT/issues?q=is%3Aissue)** | **[Pull Request](https://github.com/hugoalh/GitHubAction.SendToIFTTT/pulls?q=is%3Apr)** |
|:----|:----|:----|
| **Latest:** ![](https://img.shields.io/github/release/hugoalh/GitHubAction.SendToIFTTT?sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&color=000000&label=%20))<br />**Pre:** ![](https://img.shields.io/github/release/hugoalh/GitHubAction.SendToIFTTT?include_prereleases&sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date-pre/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&color=000000&label=%20)) | **Open:** ![](https://img.shields.io/github/issues-raw/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-closed-raw/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&color=000000&label=%20) | **Open:** ![](https://img.shields.io/github/issues-pr-raw/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-pr-closed-raw/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&color=000000&label=%20) |

## 📜 Description

Send data to IFTTT applet via webhook, support variables.

## 🛠 Configuration

### 🏗 Environment

#### Operating System

Any

#### Software

- NodeJS v12
- NPM v6+

### 📥 Input

#### Not Support Variable

- **`webhook_key`:** `<string.secret>` Webhook key.
  > To obtain it, click `Menu` > `My Services` > `Webhooks` > `Settings`, your key is at `Account Info` > `URL` and after `https://maker.ifttt.com/use/`.
  > 
  > ![](https://i.imgur.com/ihnqN5B.png)
  > 
  > To regenerate it, click `Edit`.
- **`variable_list_external` \[Optional\]:** `<object.json>` External variable list that will use in the data. Can import from other actions' output.
- **`variable_prefix` \[Optional\]:** `<string = "%">` Variable prefix.
- **`variable_suffix` \[Optional\]:** `<string = "%">` Variable suffix.
- **`variable_join` \[Optional\]:** `<string = "_">` Variable join if the variable list has depth.

#### Support Variable

- **`webhook_eventname`:** `<string>` Webhook event name, create from applet "Receive A Web Request - Event Name", keep in lower-case to prevent issue.
- **`value1` \[Optional\]:** `<string>` Default IFTTT ingredient namespace.
- **`value2` \[Optional\]:** `<string>` Default IFTTT ingredient namespace.
- **`value3` \[Optional\]:** `<string>` Default IFTTT ingredient namespace.

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
