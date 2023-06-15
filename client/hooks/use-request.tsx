import axios, { AxiosResponse } from "axios";
import { useState } from "react";

interface UseRequestProps {
    url: string;
    method: "get" | "post" | "put" | "patch" | "delete";
    body?: any;
    onSuccess?: (data: any) => void;
}

const useRequest = ({ url, method, body, onSuccess }: UseRequestProps) => {
    const [errors, setErrors] = useState<JSX.Element | null>(null);

    const doRequest = async (props: any = {}) => {
        try {
            setErrors(null);
            const response = await axios[method](url, { ...body, ...props });

            if (onSuccess) {
                onSuccess(response.data);
            }

            return response.data;
        } catch (err: any) {
            if (err.response && err.response.data) {
                setErrors(
                    <div className="alert alert-danger">
                        <h4>Ooops....</h4>
                        <ul className="my-0">
                            {<li>{err.response.data.message}</li>}
                        </ul>
                    </div>
                );
            } else {
                setErrors(
                    <div className="alert alert-danger">
                        <h4>Ooops....</h4>
                        <p>An error occurred.</p>
                    </div>
                );
            }
        }
    };

    return { doRequest, errors };
};

export default useRequest;
