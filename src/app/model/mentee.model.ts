
/**
 * Interface for creating and updating Mentee Registration
 * Used by: POST /api/Mentor_Mentee/Mentee-registration and PUT /api/Mentor_Mentee/mentee/{id}
 */
export interface MenteeRegistration {
  // Basic Information
  name: string;
  dateOfBirth: string; // ISO date string
  currentAge: number;
  gender: string;
  mobileNumber: string;
  email: string;
  qualification: string;
  presentStatus: string;

  // Family Details
  fatherName: string;
  fatherAge: number;
  fatherQualification: string;
  fatherOccupation: string;
  fatherIncome?: number | null;
  fatherMobile: string;
  motherName: string;
  motherAge?: number | null;
  motherQualification?: string | null;
  motherOccupation?: string | null;
  motherIncome?: number | null;
  motherMobile?: string | null;

  // Employment Details (Conditional - when presentStatus = "Employed")
  employedPosition?: string | null;
  employedCompany?: string | null;
  employedCompanyLocation?: string | null;

  // Student Details (Conditional - when presentStatus = "Student")
  studentCourse?: string | null;
  studentDuration?: string | null;
  studentCurrentYear?: string | null;
  studentCollege?: string | null;
  studentCollegeAddress?: string | null;

  // Entrepreneur Details (Conditional - when presentStatus = "Entrepreneur")
  businessName?: string | null;
  businessType?: string | null;
  businessNature?: string | null;
  businessAddress?: string | null;
  businessContact?: string | null;
  businessEmail?: string | null;

  // Homemaker Details (Conditional - when presentStatus = "Homemaker")
  homemakerPursuingCourse?: string | null; // "Yes" or "No"
  homemakerCourseName?: string | null;
  homemakerCourseDuration?: string | null;
  homemakerCourseMode?: string | null;

  // Purpose
  purpose: string;
}

/**
 * Interface for Mentee Registration Response
 * Used by: POST /api/Mentor_Mentee/Mentee-registration response
 */
export interface MenteeRegistrationResponse {
  menteeRegistrationId: number;
  name: string;
  email: string;
  mobileNumber: string;
  presentStatus: string;
  createdDate: string; // ISO date string
  message: string;
}

/**
 * Interface for retrieving a single Mentee with full details
 * Used by: GET /api/Mentor_Mentee/{id}
 */
export interface MenteeDetail {
  menteeRegistrationId: number;

  // Basic Information
  name: string;
  dateOfBirth: string; // ISO date string
  currentAge: number;
  gender: string;
  address: string;
  mobileNumber: string;
  email: string;
  qualification: string;

  // Present Status
  presentStatus: string;

  // Employment Details
  employmentPosition: string;
  employmentCompanyName: string;
  employmentCompanyLocation: string;

  // Student Details
  studentCourseName: string;
  studentCourseDuration: string;
  studentCurrentYear: string;
  studentCollegeName: string;
  studentCollegeAddress: string;

  // Entrepreneur Details
  entrepreneurBusinessName: string;
  entrepreneurBusinessType: string;
  entrepreneurBusinessNature: string;
  entrepreneurBusinessAddress: string;
  entrepreneurContactNumber: string;
  entrepreneurEmail: string;

  // Homemaker Details
  homemakerCourseName: string;
  homemakerCourseDuration: string;
  homemakerCourseMode: string;

  // Purpose
  purposeOfMentoring: string;

  // Family Details
  familyDetails: FamilyDetails;

  // Audit Fields
  createdDate: string; // ISO date string
  modifiedDate?: string | null; // ISO date string
}

/**
 * Interface for listing Mentees (summary view)
 * Used by: GET /api/Mentor_Mentee/mentees
 */
export interface MenteeList {
  menteeRegistrationId: number;
  name: string;
  email: string;
  mobileNumber: string;
  currentAge: number;
  gender: string;
  qualification: string;
  presentStatus: string;
  purposeOfMentoring: string;
  createdDate: string; // ISO date string
  modifiedDate?: string | null; // ISO date string
}

/**
 * Interface for Update Mentee Response
 * Used by: PUT /api/Mentor_Mentee/mentee/{id} response
 */
export interface MenteeUpdateResponse {
  menteeRegistrationId: number;
  name: string;
  email: string;
  presentStatus: string;
  modifiedDate: string; // ISO date string
  message: string;
}

// ========================================
// MENTOR INTERFACES
// ========================================

/**
 * Interface for creating and updating Mentor Registration
 * Used by: POST /api/Mentor_Mentee/Mentor-registration and PUT /api/Mentor_Mentee/mentor/{id}
 */
export interface MentorRegistration {
  // Basic Information
  name: string;
  dateOfBirth: string; // ISO date string
  currentAge: number;
  gender: string;
  qualification: string;
  presentOccupation: string;
  address: string;
  mobileNumber: string;
  email: string;
  introduction: string;
  mentorshipField: string;

  // Family Details (Optional for mentors - may be orphan)
  fatherName?: string | null;
  fatherAge?: number | null;
  fatherQualification?: string | null;
  fatherOccupation?: string | null;
  fatherIncome?: number | null;
  fatherMobile?: string | null;
  motherName?: string | null;
  motherAge?: number | null;
  motherQualification?: string | null;
  motherOccupation?: string | null;
  motherIncome?: number | null;
  motherMobile?: string | null;
}

/**
 * Interface for Mentor Registration Response
 * Used by: POST /api/Mentor_Mentee/Mentor-registration response
 */
export interface MentorRegistrationResponse {
  mentorRegistrationId: number;
  name?: string | null;
  email?: string | null;
  mobileNumber?: string | null;
  mentorshipField?: string | null;
  createdDate: string; // ISO date string
  message?: string | null;
}

/**
 * Interface for retrieving a single Mentor with full details
 * Used by: GET /api/Mentor_Mentee/mentor/{id}
 */
export interface MentorDetail {
  mentorRegistrationId: number;

  // Basic Information
  name: string;
  dateOfBirth: string; // ISO date string
  currentAge: number;
  gender: string;
  qualification: string;
  presentOccupation: string;
  address: string;
  mobileNumber: string;
  email: string;
  introduction: string;
  mentorshipField: string;

  // Family Details (Optional)
  familyDetails: FamilyDetails;

  // Audit Fields
  createdDate: string; // ISO date string
  modifiedDate?: string | null; // ISO date string
}

/**
 * Interface for listing Mentors (summary view)
 * Used by: GET /api/Mentor_Mentee/mentors
 */
export interface MentorList {
  mentorRegistrationId: number;
  name: string;
  email: string;
  mobileNumber: string;
  currentAge: number;
  gender: string;
  qualification: string;
  presentOccupation: string;
  mentorshipField: string;
  createdDate: string; // ISO date string
  modifiedDate?: string | null; // ISO date string
}

/**
 * Interface for Update Mentor Response
 * Used by: PUT /api/Mentor_Mentee/mentor/{id} response
 */
export interface MentorUpdateResponse {
  mentorRegistrationId: number;
  name: string;
  email: string;
  mentorshipField: string;
  modifiedDate: string; // ISO date string
  message: string;
}

// ========================================
// SHARED INTERFACES
// ========================================

/**
 * Interface for Family Details (nested in Mentee/Mentor responses)
 */
export interface FamilyDetails {
  familyDetailsId: number;
  fatherName: string;
  fatherAge: number;
  fatherQualification: string;
  fatherOccupation: string;
  fatherIncome: number;
  fatherNumber: string;
  motherName: string;
  motherAge: number;
  motherQualification: string;
  motherOccupation: string;
  motherIncome: number;
  motherNumber: string;
}

/**
 * Generic API Response wrapper
 * Can be used for consistent response structure
 */
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  errors: string[];
}

// ========================================
// ENUMS (Optional - for type safety)
// ========================================

export enum PresentStatus {
  Employed = 'Employed',
  Student = 'Student',
  Entrepreneur = 'Entrepreneur',
  Homemaker = 'Homemaker'
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other'
}

export enum HomemakerPursuingCourse {
  Yes = 'Yes',
  No = 'No'
}