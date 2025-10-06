import resumeFile from "../assets/resume/ArbinSigdelUpdatedCV.pdf";
export interface ResumeMeta {
  fileName: string;
  url?: string;
  updatedAt: string;
  version?: string;
}

export const resume: ResumeMeta = {
  fileName: resumeFile,
  updatedAt: "2025-10-06",
  version: "v1.0.0",
};
