# [GitHub Action] Send To IFTTT

[`hugoalh/GitHubAction.SendToIFTTT`](https://github.com/hugoalh/GitHubAction.SendToIFTTT)

[![](https://img.shields.io/github/contributors/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&logo=github)](https://github.com/hugoalh/GitHubAction.SendToIFTTT/graphs/contributors)
[![](https://img.shields.io/github/license/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&logo=github)](https://github.com/hugoalh/GitHubAction.SendToIFTTT/blob/master/LICENSE.md)
![](https://img.shields.io/github/languages/count/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&logo=github)
![](https://img.shields.io/github/languages/top/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&logo=github)
![](https://img.shields.io/github/repo-size/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&logo=github)
![](https://img.shields.io/github/languages/code-size/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&logo=github)
![](https://img.shields.io/github/watchers/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&logo=github)
![](https://img.shields.io/github/stars/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&logo=github)
![](https://img.shields.io/github/forks/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&logo=github)
[![](https://img.shields.io/lgtm/alerts/g/hugoalh/GitHubAction.SendToIFTTT.svg?style=flat-square&logo=lgtm&label=%20)](https://lgtm.com/projects/g/hugoalh/GitHubAction.SendToIFTTT/alerts)
[![](https://img.shields.io/lgtm/grade/javascript/g/hugoalh/GitHubAction.SendToIFTTT.svg?style=flat-square&logo=lgtm)](https://lgtm.com/projects/g/hugoalh/GitHubAction.SendToIFTTT/context:javascript)

| **[Release](https://github.com/hugoalh/GitHubAction.SendToIFTTT/releases)** ![](https://img.shields.io/github/downloads/hugoalh/GitHubAction.SendToIFTTT/total?style=flat-square&color=000000&label=%20) | **[Issue](https://github.com/hugoalh/GitHubAction.SendToIFTTT/issues?q=is%3Aissue)** | **[Pull Request](https://github.com/hugoalh/GitHubAction.SendToIFTTT/pulls?q=is%3Apr)** |
|:----|:----|:----|
| **Stable:** ![](https://img.shields.io/github/release/hugoalh/GitHubAction.SendToIFTTT?sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&color=000000&label=%20))<br />**Latest:** ![](https://img.shields.io/github/release/hugoalh/GitHubAction.SendToIFTTT?include_prereleases&sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date-pre/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&color=000000&label=%20)) | **Open:** ![](https://img.shields.io/github/issues-raw/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-closed-raw/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&color=000000&label=%20) | **Open:** ![](https://img.shields.io/github/issues-pr-raw/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-pr-closed-raw/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&color=000000&label=%20) |

## 📜 Description

Send data to IFTTT applet via webhook, support variables.

## 🛠 Configuration

### 📥 Input

**Not support variable:**

| **Key** | **Require? / Require Condition?** | **Type** | **Description** |
|:----|:----|:----|:----|
| `webhook_eventname` | ✔ | String | Webhook event name, create from applet "Receive A Web Request - Event Name", keep in lower-case to prevent issue. |
| `webhook_key` | ✔ | Secret String | Webhook key.<br />To obtain it, click `Menu` > `My Services` > `Webhooks` > `Settings`, your key is at `Account Info` > `URL` and after `https://maker.ifttt.com/use/`.<br /><img src="https://i.imgur.com/ihnqN5B.png" width="auto" height="384px" /><br />To regenerate it, click `Edit`.|
| `variable_list_<Number>_name` |  | String | Namespace for this variable list. Only use when having multiple variable lists. Number start at `0`, maximum 10 variable lists. |
| `variable_list_<Number>_data` | When have `variable_list_<Number>_name` | Stringified JSON | Variable list that will use in the data. Number start at `0`, maximum 10 variable lists. |
| `variable_prefix` |  | String | Variable prefix. Default: `%`. |
| `variable_suffix` |  | String | Variable suffix. Default: `%`. |
| `variable_join` |  | String | Variable join if having multiple variable lists, and/or variable list has depth. Default: `_`. |

**Support variable (& optional):**

| **Key** | **Type** | **Description** |
|:----|:----|:----|
| - `value1`<br />- `value2`<br />- `value3` | String | Default IFTTT ingredient namespace. |

### 📤 Output

*N/A*.

### Example

*See [workflow_example.yml](./workflow_example.yml)*.

### 📓 Guide

- [GitHub Actions: Creating and storing encrypted secrets](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)
