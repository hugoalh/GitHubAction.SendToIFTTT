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

A GitHub action to send data to IFTTT applet via webhook.

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

- NodeJS (>= v12.13)
- NPM (>= v6.12)

### 📥 Input

<table>
  <tr>
    <td><b>Argument</b></td>
    <td>
      <b>Type</b><br />
      [R] Require<br />
      [V] Variable
    </td>
    <td><b>Description</b></td>
  </tr>
  <tr>
    <td><code>webhook_eventname</code></td>
    <td><code>string</code><br />[R][V]</td>
    <td>IFTTT webhook event name, create from applet "Receive A Web Request - Event Name", keep in lower case to prevent issue.</td>
  </tr>
  <tr>
    <td><code>webhook_key</code></td>
    <td><code>string.secret</code><br />[R]</td>
    <td>
      IFTTT webhook key.<br />
      <blockquote>
        To obtain it, click <code>Menu</code> > <code>My Services</code> > <code>Webhooks</code> > <code>Settings</code>, your key is at <code>Account Info</code> > <code>URL</code> and after <code>https://maker.ifttt.com/use/</code>.<br />
        To regenerate it, click <code>Edit</code>.<br />
        <img align="center" src="https://i.imgur.com/ihnqN5B.png" />
      </blockquote>
    </td>
  </tr>
  <tr>
    <td><code>variable_join</code></td>
    <td><code>string = "_"</code></td>
    <td>Variable join if the variable list has depth.</td>
  </tr>
  <tr>
    <td><code>variable_list_external</code></td>
    <td><code>object.json</code></td>
    <td>External variable list that will use in the data. Can import from other actions' output.</td>
  </tr>
  <tr>
    <td><code>variable_prefix</code></td>
    <td><code>string = "%"</code></td>
    <td>Variable prefix.</td>
  </tr>
  <tr>
    <td><code>variable_suffix</code></td>
    <td><code>string = "%"</code></td>
    <td>Variable suffix.</td>
  </tr>
  <tr>
    <td><code>value1</code></td>
    <td><code>string</code><br />[V]</td>
    <td>IFTTT default ingredient namespace.</td>
  </tr>
  <tr>
    <td><code>value2</code></td>
    <td><code>string</code><br />[V]</td>
    <td>IFTTT default ingredient namespace.</td>
  </tr>
  <tr>
    <td><code>value3</code></td>
    <td><code>string</code><br />[V]</td>
    <td>IFTTT default ingredient namespace.</td>
  </tr>
</table>

To use GitHub Action context variable list, use placeholder `"${{github.event.<namespace>}}"` in the workflow file (parse by GitHub Action), or use placeholder `"<variable_prefix>payload<variable_join><namespace><variable_suffix>"` in the workflow file which marked support variable (parse by this action).

To use external variable list, use placeholder `"<variable_prefix>external<variable_join><namespace><variable_suffix>"` in the workflow file which marked support variable (parse by this action).

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

- [GitHub: Webhook event payloads](https://docs.github.com/en/developers/webhooks-and-events/webhook-events-and-payloads)
- [GitHub Actions: Creating and storing encrypted secrets](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)
- [GitHub Actions: Enable debug logs](https://github.com/actions/toolkit/blob/main/docs/action-debugging.md#step-debug-logs)
