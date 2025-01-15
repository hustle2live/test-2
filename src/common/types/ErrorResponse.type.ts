import MessageResponse from './MessageResponse.type';

export default interface ErrorResponse extends MessageResponse {
  stack?: string;
}