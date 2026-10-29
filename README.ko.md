<p align="right">🌐 English | <a href="README.es.md">Español</a> | <a href="README.pt_BR.md">Português (Brasil)</a> | 한국어</p>

<div align="center">

# 🎮 Mona Mayhem

### GitHub 기여 그래프를 아케이드 대결로 바꿔 보세요.

GitHub Copilot과 함께 두 GitHub 사용자를 비교하는 레트로 스타일 아레나를 한 단계씩 만들어 보세요. VS Code에서 작업하거나 Copilot CLI로 터미널에서 도전할 수 있습니다.

<p>
   <a href="workshop/ko/00-overview.md"><strong>워크숍 시작 →</strong></a>
   &nbsp;·&nbsp;
   <a href="https://copilot-dev-days.github.io/mona-mayhem/">워크숍 사이트 열기</a>
</p>

**약 60분** &nbsp;·&nbsp; **7개 파트** &nbsp;·&nbsp; **두 가지 제작 방식**

</div>

<p align="center">
   <img src="https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7" alt="레트로 아케이드 스타일의 GitHub 기여 배틀 아레나" width="900" />
</p>

<p align="center"><em>워크숍에서 만들 GitHub 기여 배틀 아레나입니다.</em></p>

## 플레이어 선택

두 트랙은 동일한 프로젝트와 워크숍 파트를 따릅니다. 원하는 작업 환경을 선택하십시오.

| VS Code | Copilot CLI |
|---------|-------------|
| Chat으로 탐색하고 Plan Mode로 계획하며 Agent Mode로 구현한 다음, 백그라운드 에이전트와 편집기 내 검토 기능으로 다듬습니다. | `copilot`, `@file` 컨텍스트, `/plan`, `/fleet`, `/delegate`, `/review`를 사용해 터미널에서 작업합니다. |

## 제작 과정

계획부터 시작해 시작 프로젝트를 기여 그래프 배틀 아레나로 바꿉니다. Copilot에 유용한 프로젝트 컨텍스트를 제공하고, 코딩 전에 구현 방식을 구체화하고, 디자인을 반복해서 개선하고, 결과를 검토하는 방법을 연습합니다.

| 파트 | 미션 | 진행 내용 |
|------|------|----------|
| [00 · 개요](workshop/ko/00-overview.md) | 트랙 선택 | 학습 목표 및 워크숍 준비 |
| [01 · 설정](workshop/ko/01-setup.md) | 컨텍스트 설정 | 지침, 권한, 환경 |
| [02 · 계획 및 스캐폴딩](workshop/ko/02-plan-and-scaffold.md) | 구현 설계 | API 및 페이지 아키텍처 |
| [03 · 게임 구현](workshop/ko/03-agent-mode.md) | 게임을 플레이 가능하게 만들기 | 에이전트 기반 구현 및 반복 개선 |
| [04 · 디자인 우선 테마 구성](workshop/ko/04-design-vibes.md) | 아케이드 스타일 찾기 | 시각적 계획 및 구현 |
| [05 · 다듬기](workshop/ko/05-polish.md) | 경험 개선 | 병렬 작업, 검토, 품질 점검 |
| [06 · 보너스](workshop/ko/06-bonus.md) | 요구 사항 이상으로 확장 | 추가 기능 및 Copilot 실험 |

## 시작하기

1. **Use this template**으로 새 저장소를 만들거나 이 저장소를 포크합니다.
2. 저장소를 복제해 VS Code에서 열거나, Copilot CLI로 터미널에서 작업합니다.
3. [워크숍 개요](workshop/ko/00-overview.md)를 따라 트랙을 선택합니다.

### 필요한 항목

- GitHub Copilot(Pro, Business 또는 Enterprise), Git, Node.js
- **VS Code 트랙:** VS Code 1.107 이상 및 로그인된 GitHub Copilot 확장
- **CLI 트랙:** GitHub Copilot CLI(`copilot`); npm으로 설치하려면 Node.js 22 이상, 또는 Homebrew / WinGet 사용

## 기술 구성

- [Astro](https://astro.build/) 6 및 [Node 어댑터](https://docs.astro.build/en/guides/integrations-guide/node/)
- GitHub 기여 그래프 데이터
- 레트로 아케이드 분위기를 위한 Press Start 2P

## 배포 참고 사항

현재 GitHub Pages 워크플로는 `docs/` 및 `workshop/`의 정적 워크숍과 문서를 게시합니다. `src/`의 Astro 앱을 빌드하거나 배포하지는 **않습니다**.

Astro 앱을 GitHub Pages에 배포하려면 정적 출력을 사용해야 합니다.

1. `astro.config.mjs`의 `output`을 `server`에서 `static`으로 변경합니다.
2. `astro.config.mjs`와 `package.json`에서 Node 어댑터(`@astrojs/node`)를 제거합니다.
3. GitHub Actions 워크플로에서 `npm ci`와 `npm run build`를 실행한 다음 Pages 아티팩트로 `dist/`를 업로드하도록 변경합니다.
4. 프로젝트 페이지(`https://<user>.github.io/<repo>/`)에 배포한다면 `astro.config.mjs`에서 `site`와 `base`를 설정합니다.

프로덕션에서 API 라우트를 계속 사용해야 한다면 GitHub Pages 대신 Vercel, Netlify 또는 Node.js 호스트와 같은 서버 플랫폼에 배포합니다.

## 라이선스

[MIT](LICENSE)
