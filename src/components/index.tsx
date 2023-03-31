import axios from "axios";
import { useEffect, useState } from "react";

export interface IRequest {
  body?: any;
  path: string;
  isRequest?: boolean;
  header?: any;
  name?: string;
  method?: string;
  onGetData: (data: any) => void;
  onError: (error: any) => void;
  data?: any;
  onLoading: (isLoading: boolean) => void;
}

export const GrabberRequest = ({
  path,
  onGetData,
  isRequest,
  method,
  onLoading,
  data,
  onError,
}: IRequest) => {
  useEffect(() => {
    if (isRequest === true) {
      onLoading(true);

      if (method === "GET") {
        axios
          .get(path)
          .then((res: any) => {
            onLoading(false);
            onGetData(res.data);
          })
          .catch((error: any) => {
            onLoading(false);
            onError(error);
            hasError(error);
          });
      } else if (method === "POST") {
        axios
          .post(path, data)
          .then((res: any) => {
            onLoading(false);
            onGetData(res.data);
          })
          .catch((error: any) => {
            onLoading(false);
            onError(error);
            hasError(error);
          });
      }
    }
  }, [isRequest]);
  return <></>;
};

const hasError = (error: any) => {
  return error;
};
