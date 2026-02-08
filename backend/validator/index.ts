// ==================== VALIDATOR INDEX ====================
// Export all validators from a single entry point

// Auth validators
export {
    registerSchema,
    loginSchema,
    verifyOTPSchema,
    resendOTPSchema,
    forgotPasswordSchema,
    resetPasswordSchema,
    updateProfileSchema,
    changePasswordSchema,
    // Types
    RegisterInput,
    LoginInput,
    VerifyOTPInput,
    ResendOTPInput,
    ForgotPasswordInput,
    ResetPasswordInput,
    UpdateProfileInput,
    ChangePasswordInput
} from '@interviewprep/common';

// Problem validators
export {
    createProblemSchema,
    updateProblemSchema,
    getProblemSchema,
    listProblemsSchema,
    deleteProblemSchema,
    bulkDeleteProblemsSchema,
    // Types
    CreateProblemInput,
    UpdateProblemInput,
    GetProblemInput,
    ListProblemsInput,
    DeleteProblemInput,
    BulkDeleteProblemsInput
} from './problemValidator';

// Default exports for backward compatibility
// Default exports for backward compatibility
import problemValidators from './problemValidator';

export { problemValidators };

export default {
    problem: problemValidators
};
