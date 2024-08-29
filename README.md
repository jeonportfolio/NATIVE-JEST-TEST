# 단위테스트 JEST 

- 사전 검증을 통하여 안정성 있는 앱을 전달하기 위함 <br>

## Static Analysis

- 코드 상에서 있는 문제를 바로 알아 낼 수 있는 것  <br>
-Type Checking (TypeScript, Flow)  <br>
- Lint (ESLint) <br>
- 저 비용 고효율  <br>

## Testable code

- 코드를 각각 단위에 맞게 쪼개는 것  <br>
- 비즈니스 로직, App State, 컴포넌트 등의 단위로 분리  <br>

## Structuring Test 

- 테스트 작성시 명확하게 어떤 테스트인지를 전달하기 위함 <br>
- 구조화된 테스트 문은 모두가 테스트의 요구사항을 파악하기 쉬워진다. <br>

## Unit Test 

- 가장 작은 단위에 대한 테스트 <br>
- 쉽고 빠르게 작성 가능 바로 실행 fuction과 class등에 적용 합쳤을 때 변수가 있을 수 있음 <br>


## Integration Test 

- 컴포넌트 자체에 대한 검증을 진행  <br>
- Interaction Test: 버튼 작동여부 disable 되었을 때 작동여부  <br>
- Snapshot Test : 이전에 render 되는 것과 지금 render되는 것이 같은지 입증 <br>

## E2E TEST

- 실제로 돌아가는 앱에서 지정된 스크립트대로 반복하는 것  <br>
- 실제로 로그인 플로우 등이 잘 변하지 않는 화면에 대해서는 테스트 가능 
- Detox,appium 등 오픈소스로 되어있음  <br>


## Jest 

- Javascript Unit Test Framework <br>
- 자바스크립트에서 유닛테스트를 만들 때 가장 범용적으로 사용 됨  <br>

## Jest 설치

- `npm install --save-dev jest @types/jest`<br>
- unit 테스트를 위해 json script 부분에 "test:unit": "jest" 추가 <br>
- `npm install --save-dev react-test-renderer@18.1.0`<br>
- `npm install --save-dev @testing-library/react-native`<br>
- `npm install --save-dev @testing-library/jest-native`<br>
- jest.config안에 `{"preset": "react-native", "setupFilesAfterEnv":[@testing-library/jest-native/extend-expect]}` 추가 <br>
- ` npm run test:unit`으로 테스트 진행<br>
- 숫자 계산 테스트 덧셈 (NumberUtils.test.ts)<br>
- 날짜 계산 테스트 ms로 날짜를 추출하여 해당 조건에 맞는 날짜 형식으로 추출 (DateUtils.test.ts)<br>

## 컴포넌트 테스트 

- 버튼 테스트 진행 (Button.test.tsx)