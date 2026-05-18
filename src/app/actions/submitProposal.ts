"use server";

export async function submitProposal(prevState: any, formData: FormData) {
  try {
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    // Here you would integrate with your backend CRM, Database, or send an Email.
    // Example: await db.proposals.create({ data });
    
    // Simulating network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Proposal Submitted Successfully:", data);

    return {
      success: true,
      message: "Thank you! Your proposal request has been successfully submitted. Our team will get back to you shortly.",
    };
  } catch (error) {
    console.error("Proposal Submission Error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
