# [Carmore] 중고차 랜딩페이지 README

![Image](https://github.com/user-attachments/assets/ae47b0d0-cc56-4604-afa1-90a8c2e2cdcf)


- 배포 URL :https://carmore.netlify.app

## 1. 프로젝트 소개
- 웹페이지 명: **CarMore (카모어)**
- **CarMore는 중고차 구매 고객을 위한 직관적인 차량 탐색 및 상담 유도 중심의 랜딩페이지**입니다.
- 복잡한 검색이나 긴 설명 없이, 한눈에 정보를 확인하고 상담 요청까지 이어질 수 있도록 설계된 마이크로 페이지 형식입니다.
- 시선을 끄는 디자인과 핵심 정보 중심 UI로, 사용자의 이탈을 줄이고 **빠른 전환(Conversion)**을 목표로 합니다.


### **타겟**

- **첫 차를 고민 중인 20~30대 사회초년생**
  경제적이고 안전한 중고차를 찾는 고객을 위해 **직관적이고 신뢰성 높은 정보 전달**을 지향합니다.
    
- **모바일 중심으로 웹 검색을 많이 하는 고객층**
    간편한 접근성과 반응형 구성으로 **스마트폰 환경에서도 최적의 정보 전달**이 가능합니다.
    
- **중고차에 대한 신뢰가 부족한 고객**
    검증된 견적, 전문가 상담, 실제 후기 등을 통해 **신뢰감 있는 브랜드 인상을 주는 데 초점**을 맞췄습니다.
  

### ** 페이지 구성**

- 메인 배너 (0원 선납 강조)
- 차량 검색 유도 섹션
- 차량 혜택 안내
- 상담 신청 CTA (Call to Action)
- 하단 FAQ 섹션

주요 목적
- 고객에게 인테리어 스타일을 감각적으로 제안
- 브랜드 아이덴티티를 세련된 UI 구조로 구현
- 다양한 기기에서 반응형으로 작동하도록 퍼블리싱 


## 2. 개발 환경

- Skills : HTML, SCSS, JavaScript, jQuery
- 협업 툴 : Notion, Github
- 서비스 배포 환경 : Netlify
- 디자인 : [Figma](https://www.figma.com/file/fAisC2pEKzxTOzet9CfqML/README(oh-my-code)?node-id=39%3A1814)

## 3. 프로젝트 구조

```
Carmore/
├── index.html                    # 메인 랜딩 페이지
├── README.md                     # 프로젝트 개요 및 설명 문서

├── assets/                       # 정적 리소스 폴더
│   ├── css/                     # 스타일 시트
│   │   ├── animate.css         # 애니메이션 관련 클래스 정의
│   │   ├── common.css          # 공통 레이아웃 및 스타일
│   │   ├── normalize.css       # 브라우저 기본 스타일 초기화
│   │   ├── reset.css           # 요소별 초기화 스타일
│   │   └── style.css           # 최종 통합 스타일 시트
│
│   ├── js/                      # 기능 스크립트
│   │   ├── main.js             # 주요 인터랙션 로직
│   │   └── wow.min.js          # 스크롤 애니메이션(wow.js 라이브러리)
│
│   └── images/                  # 이미지 리소스

```

## 4. 개발 기간 및 작업 관리

**개발 기간**

- 전체 개발 기간 : 2025-03-03 ~ 2025-03-24
- UI 구현 : 2025-03-03 ~ 2025-03-20
- 기능 구현 : 2025-03-17 ~ 2025-03-24


## 5. 주요 기술 구현

### 1. 인터랙션 구현 (Section 02)
메인페이지 중간 영역(section02)에 적용된 스크롤 기반 인터랙션 UI

- WOW.js와 animate.css를 조합하여 등장 애니메이션 구현
- 사용자의 스크롤에 따라 콘텐츠가 자연스럽게 fade-in / slide-up되며 몰입도 강화
- 브랜드 이미지를 시각적으로 각인시키는 데 최적화된 구조

> 사용 기술: wow.min.js, animate.css, main.js
> 스타일 파일: assets/css/style.css
> 주요 클래스: .wow, .fadeInUp, .slideInLeft 등
> 트리거 위치: #section02


### 2. 반응형 웹 제작 (Responsive Web Design)

- **모바일·태블릿·PC 해상도별 완전 대응**
- `@media` 쿼리 기반 반응형 레이아웃 구현
- `%`, `vw`, `flex` 등을 활용한 **유연한 콘텐츠 배치**
- 모바일 환경에서의 **터치 인터랙션 최적화**

> 대응 해상도:
> 
> - Mobile: 480px 이하
> - Tablet: 768px
> - Desktop: 1280px 이상

> 관련 파일:
> `assets/css/style.css`
> 
> `assets/css/reset.css`, `normalize.css`, `common.css` 등 기본 스타일 포함 
> 

![Image](https://github.com/user-attachments/assets/726a2452-32f5-42b0-867d-65f07db8e0d3)


###  3. 사용자 리뷰 섹션 (Vertical Interaction)
사용자 피드백이나 차량 후기 등을 강조하기 위한 세로 스크롤 기반 콘텐츠 슬라이드 구성


- 카드 형태의 후기가 스크롤 시 순차적으로 등장하며 시각적 주목도 향상
- 마우스 오버 시 강조되거나 확대 효과 등의 인터랙션도 적용 가능
- 간결한 리뷰 형태와 인터랙션 효과를 조합하여 사용자 신뢰 유도

> 관련 파일:
> 
> `index.html` `assets/js/main.js` `assets/css/style.css`
> 


![Image](https://github.com/user-attachments/assets/48776fe2-c3a1-4b9d-a288-6d600e6f82ab)


## **성능최적화**

- **Lazy Loading**: 이미지 및 비동기 리소스 최적화
- **CSS 파일 최소화**
- **Webfont preload** 적용

## ** 성능 메트릭스 (Lighthouse 기준)**

| **항목** | **점수** |
| --- | --- |
| Performance | 94 |
| Accessibility | 96 |
| Best Practices | 95 |
| SEO | 91 |
