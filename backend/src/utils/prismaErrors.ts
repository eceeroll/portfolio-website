// P2025: "An operation failed because it depends on one or more records that
// were required but not found" (e.g. update/delete of a missing id).
export const isRecordNotFoundError = (error: unknown): boolean =>
  typeof error === "object" &&
  error !== null &&
  "code" in error &&
  (error as { code?: unknown }).code === "P2025";
