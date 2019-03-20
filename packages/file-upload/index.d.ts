import { Component, SFC, ReactNode, ReactElement, ComponentClass } from "react";

export interface FileUploadProps {
  accept?: string;
  onClear: () => void;
  onSubmit: (files: File[]) => void;
  onDrop?: (files: File[]) => void;
  onRejected?: (files: File[]) => void;
  loading?: boolean;
  completed?: boolean;
  multiple?: boolean;
}

export default class FileUpload extends Component<FileUploadProps> {}
