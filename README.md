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

**Not support variable:**

| **Key** | **Require? / Require Condition?** | **Type** | **Description** |
|:----|:----|:----|:----|
| `webhook_eventname` | ✔ | String | Webhook event name, create from applet "Receive A Web Request - Event Name", keep in lower-case to prevent issue. |
| `webhook_key` | ✔ | Secret String | Webhook key.<br />To obtain it, click `Menu` > `My Services` > `Webhooks` > `Settings`, your key is at `Account Info` > `URL` and after `https://maker.ifttt.com/use/`.<br /><img src="https://i.imgur.com/ihnqN5B.png" width="auto" height="256px" /><br />To regenerate it, click `Edit`.|
| `variable_list_<Number>_name` |  | String | Namespace for this variable list. Only use when having multiple variable lists. Number start at `0`, maximum 4 variable lists. |
| `variable_list_<Number>_data` | When have `variable_list_<Number>_name` | Stringified JSON | Variable list that will use in the data. Number start at `0`, maximum 4 variable lists. |
| `variable_prefix` |  | String | Variable prefix. Default: `%`. |
| `variable_suffix` |  | String | Variable suffix. Default: `%`. |
| `variable_join` |  | String | Variable join if having multiple variable lists, and/or variable list has depth. Default: `_`. |

**Support variable (& optional):**

| **Key** | **Type** | **Description** |
|:----|:----|:----|
| - `value1`<br />- `value2`<br />- `value3` | String | Default IFTTT ingredient namespace. |

### 📤 Output

*(N/A)*

### Example

```yaml
jobs:
  send-to-ifttt:
    name: "Send To IFTTT"
    runs-on: "ubuntu-latest"
    needs:
      - "fetch-payload-data"
    steps:
      - id: "send-to-ifttt-main"
        uses: "hugoalh/GitHubAction.SendToIFTTT@v2.0.0"
        with:
          webhook_eventname: "say_hello"
          webhook_key: "${{secrets.IFTTT_WEBHOOK_KEY}}"
          value1: "Hello, world!"
          # value2:
          # value3:
          # variable_list_0_name:
          variable_list_0_data: "${{needs.fetch-payload-data.outputs.payload-data}}"
          # variable_list_1_name:
          # variable_list_1_data:
          # variable_list_2_name:
          # variable_list_2_data:
          # variable_list_3_name:
          # variable_list_3_data:
          variable_prefix: "%"
          variable_suffix: "%"
          variable_join: "."
```

### 📚 Guide

[GitHub Actions: Creating and storing encrypted secrets](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)
