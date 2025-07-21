// CoaTech Design System
// Atomic Design System for consistent UI components

// Design tokens (foundation)
export { designTokens } from './tokens'

// Atoms (basic building blocks)
export * from './atoms'

// Molecules (combinations of atoms)
export * from './molecules'

// Re-export commonly used components for convenience
export {
  // Buttons
  Button,
  PrimaryButton,
  SecondaryButton,
  OutlineButton,
  LightButton,
  
  // Typography
  Typography,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  BodyText,
  
  // Cards
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  
  // Inputs
  Input,
  Textarea,
  Select,
  
  // Icons
  Icon,
  ChevronRightIcon,
  CheckIcon,
  ArrowRightIcon
} from './atoms'

export {
  // Form Groups
  FormGroup,
  InputGroup,
  TextareaGroup,
  SelectGroup,
  
  // Card with Button
  CardWithButton,
  FeatureCard,
  ServiceCard,
  BlogCard,
  
  // Navigation
  NavigationItem,
  NavigationBrand,
  NavigationToggle
} from './molecules'
