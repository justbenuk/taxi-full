import { EmergencyContactProps } from "@/types";
import React from "react";
import EmergencyContactItem from "./emergency-contact-item";
import { Card, CardContent } from "../ui/card";

type EmergencyContactList = {
  contacts: EmergencyContactProps[];
};

export default function EmergencyContactList({ contacts }: EmergencyContactList) {
  if (contacts.length < 1) {
    return (
      <Card>
        <CardContent>
          <p>You currently have 0 saved emergency contacts. You can add them by pressing the green button</p>
        </CardContent>
      </Card>
    );
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {contacts.map((contact, idx) => (
        <EmergencyContactItem key={idx} contact={contact} />
      ))}
    </div>
  );
}
