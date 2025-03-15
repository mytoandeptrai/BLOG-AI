type UploadState = {
   success: boolean;
};

type UploadAction = (
   state: UploadState,
   formData: FormData
) => Promise<UploadState>;

export type { UploadState, UploadAction };
