export interface SectionFormDefaultData {
  id: string
  title: {
    type: string
    text: string
  }
  subtitle: {
    type: string
    text: string
  }
  inputs: {
    name: {
      id: string
      label: string
      placeholder: string
    }
    email: {
      id: string
      label: string
      placeholder: string
    }
    phone: {
      id: string
      label: string
      placeholder: string
    }
    institution: {
      id: string
      label: string
      placeholder: string
      options: string[]
    }
  }
  finePrint: {
    text: string
  }
  submit: {
    to: string
    successMessage: string
    errorMessage: string
  }
  submitButton: {
    text: string
  }
}
