interface ResponseData {
  error: boolean;
  message: string;
  result: unknown;
}

interface ErrorData {
  statusCode: number;
  message: string;
}

export { ResponseData, ErrorData };
