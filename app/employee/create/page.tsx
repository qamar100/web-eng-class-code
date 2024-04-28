import React from "react";
import FormWrapper from "@/components/ui/form-wrapper";
import EmployeeForm from "@/components/ui/employee-form";

const EmployeePageCreation = () => {
  return (
    <div className="flex justify-center item-center w-screen h-auto">
      <FormWrapper title='Create a new Employee'>
        <EmployeeForm/>
      </FormWrapper>
    </div>
  );
};

export default EmployeePageCreation;
