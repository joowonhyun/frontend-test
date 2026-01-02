import { render, screen } from "@testing-library/react";
import Home from "./page";
test("메인 페이지가 제대로 랜더링 되는지 테스트", () => {
  // 컴포넌트 그리기
  render(<Home />);

  // "컴포넌트 테스트 연습하기" 라는 텍스트를 가진 요소를 가져오기
  // <h1>컴포넌트 테스트 연습하기</h1>
  const element = screen.getByText("컴포넌트 테스트 연습하기");

  // 검증하는 법
  expect(element).toBeInTheDocument();
});
