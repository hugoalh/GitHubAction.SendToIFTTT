# <div align="center">[GitHub Action] Send To IFTTT</div>

<div align="center">
  <code>hugoalh/GitHubAction.SendToIFTTT</code><br />
  <img src="https://img.shields.io/github/languages/count/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&logo=github" />
  <img src="https://img.shields.io/github/languages/top/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&logo=github" />
  <img src="https://img.shields.io/github/repo-size/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&logo=github" />
  <img src="https://img.shields.io/github/watchers/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&logo=github" />
  <img src="https://img.shields.io/github/stars/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&logo=github" />
  <img src="https://img.shields.io/github/forks/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&logo=github" />
</div>

<table>
  <tr>
    <td align="center">
      <b>Author & Contributor</b><br />
      <img src="https://img.shields.io/github/contributors/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&color=000000&label=%20" />
    </td>
    <td><a href="https://github.com/hugoalh">hugoalh</a></td>
  </tr>
  <tr>
    <td align="center"><b>License</b></td>
    <td>MIT</td>
  </tr>
  <tr>
    <td align="center"><b>Release</b></td>
    <td>
      <b>Stable: </b><img src="https://img.shields.io/github/release/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&color=000000&label=%20" /> (<img src="https://img.shields.io/github/release-date/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&color=000000&label=%20" />); <b>Latest: </b><img src="https://img.shields.io/github/release/hugoalh/GitHubAction.SendToIFTTT?include_prereleases&style=flat-square&color=000000&label=%20" /> (<img src="https://img.shields.io/github/release-date-pre/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&color=000000&label=%20" />)
    </td>
  </tr>
  <tr>
    <td align="center"><b>Issue</b></td>
    <td>
      <b>Open: </b><img src="https://img.shields.io/github/issues-raw/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&color=000000&label=%20" />; <b>Closed: </b><img src="https://img.shields.io/github/issues-closed-raw/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&color=000000&label=%20" />
    </td>
  </tr>
  <tr>
    <td align="center"><b>Pull Request</b></td>
    <td>
      <b>Open: </b><img src="https://img.shields.io/github/issues-pr-raw/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&color=000000&label=%20" />; <b>Closed: </b><img src="https://img.shields.io/github/issues-pr-closed-raw/hugoalh/GitHubAction.SendToIFTTT?style=flat-square&color=000000&label=%20" />
    </td>
  </tr>
</table>

## 📜 Description

Send data to IFTTT applet via webhook, support variables.

### 📥 Input

#### Not support variable

| **Key** | **Require? / Require Condition?** | <div align="center">**Type**</div> | <div align="center">**Description**</div> |
|:---:|:---:|:----|:----|
| `webhook_eventname` | ✔ | String | Webhook event name, create from applet "Receive A Web Request - Event Name", keep in lower-case to prevent issue. |
| `webhook_key` | ✔ | Secret String | Webhook key.<br />To obtain it, click `Menu` > `My Services` > `Webhooks` > `Settings`, your key is at `Account Info` > `URL` and after `https://maker.ifttt.com/use/`.<br /><img src="https://i.imgur.com/ihnqN5B.png" width="auto" height="384px" /><br />To regenerate it, click `Edit`.|
| `variable_list_<Number>_name` |  | String | Namespace for this variable list. Only use when having multiple variable lists. Number start at `0`, maximum 10 variable lists. |
| `variable_list_<Number>_data` | When have `variable_list_<Number>_name` | Stringified JSON | Variable list that will use in the data. Number start at `0`, maximum 10 variable lists. |
| `variable_prefix` |  | String | Variable prefix. Default: `%`. |
| `variable_suffix` |  | String | Variable suffix. Default: `%`. |
| `variable_join` |  | String | Variable join if having multiple variable lists, and/or variable list has depth. Default: `_`. |

#### Support variable (& optional)

| **Key<br />(Require Condition?)** | <div align="center">**Type**</div> | <div align="center">**Description**</div> |
|:---:|:----|:----|
| `value1`<br />`value2`<br />`value3` | String | Default IFTTT ingredient namespace. |

### 📓 Guide

- [GitHub Actions: Creating and storing encrypted secrets](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)

## 🐛 Issue

Found any issue in this project? Submit the issue via [GitHub](https://github.com/hugoalh/GitHubAction.SendToIFTTT/issues).
