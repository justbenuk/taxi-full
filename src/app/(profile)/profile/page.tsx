import { getUserProfile } from "@/actions/user-actions";
import EmergencyContactList from "@/components/profile/emergency-contact-list";
import PersonalInfoCard from "@/components/profile/personal-info-card";
import AdminSectionTitle from "@/components/shared/admin-section-title";
import LoggedInError from "@/components/shared/logged-in-error";
import PageContainer from "@/components/shared/page-container";
import AddEmergencyContactForm from "@/forms/add-emergency-contact";

export const metadata = {
  title: "Your Profile",
};
export default async function ProfilePage() {
  const { success, user } = await getUserProfile();
  if (!success || !user) {
    return <LoggedInError />;
  }

  return (
    <PageContainer className="mt-10 space-y-10">
      <div>
        <AdminSectionTitle title="Personal Information" description="Everything we need to know about you" />
        <PersonalInfoCard user={user} />
      </div>
      <div>
        <div className="flex flex-row items-center justify-between">
          <AdminSectionTitle title="Emergency Contacts" description="Incase of an emergency, who do we call" />
          <AddEmergencyContactForm />
        </div>
        <EmergencyContactList contacts={user.emergencyContacts} />
      </div>
    </PageContainer>
  );
}
