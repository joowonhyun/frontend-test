import { render, screen } from "@testing-library/react";
import LoginForm from ".";

test("로그인 폼이 올바르게 렌더링 되는지 테스트", () => {
  render(<LoginForm />);

  // 1. 라벨에 있는 텍스트로부터 input을 가져오기
  const emailByLabel = screen.getByLabelText("이메일:");

  // 2. placeholder로부터 input을 가져오기
  const emailByPlaceholder = screen.getByPlaceholderText("이메일을 입력하세요");

  // 3. test id로부터 input을 가져오기
  const emailByTestId = screen.getByTestId("email-input");

  // 4. 역할로 버튼을 가져오기
  // <button type="submit">로그인</button>
  const button = screen.getByRole("button", { name: "로그인" });

  expect(emailByLabel).toBeInTheDocument();
  expect(emailByPlaceholder).toBeInTheDocument();
  expect(emailByTestId).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  // emailByLabel, emailByPlaceholder, emailByTestId가 모두 같은 요소인지 확인
  expect(emailByLabel).toBe(emailByPlaceholder);
  expect(emailByLabel).toBe(emailByTestId);
});
