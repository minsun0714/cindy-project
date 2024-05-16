import { useMutation } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { queryClient } from "../main"

interface IMyInfo {
	username: string
	password: string
}

export class AuthService {
	private static postMyInfo = async (payload: IMyInfo) => {
		const response = await axios.post(
			"http://localhost:3000/auth/login",
			payload
		)
		return response
	}

	private static mutationOptions = {
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["myInfo"] })
		},
		onError: (err: AxiosError | unknown) => {
			if (axios.isAxiosError(err)) {
				alert(err.message)
				return
			}
			alert("알 수 없는 오류가 발생했습니다. 다시 시도해주세요.")
		},
	}

	public static useMyInfoMutation = () => {
		return useMutation({
			mutationFn: (payload: IMyInfo) => this.postMyInfo(payload),
			...this.mutationOptions,
		})
	}
}
