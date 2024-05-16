import Input from "./components/Input"

const Login = () => {
	return (
		<div>
			<form className="flex flex-col gap-y-4">
				<Input label={"아이디"} />
				<Input label={"비밀번호"} />
				<button className="h-12 text-white border rounded-l border-mint bg-mint">
					로그인
				</button>
			</form>
		</div>
	)
}

export default Login
