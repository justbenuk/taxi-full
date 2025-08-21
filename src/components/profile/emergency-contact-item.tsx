import { EmergencyContactProps } from "@/types";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

type ContactProps = {
  contact: EmergencyContactProps;
};

export default function EmergencyContactItem({ contact }: ContactProps) {
  return (
    <div>
      <Card className="relative">
        {contact.isPrimary === true && <Badge className="absolute z-10 -top-3 left-4 bg-yellow-300 text-gray-900">Primary Contact</Badge>}
        <CardContent>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-col space-y-2">
              <h1 className="text-xs font-semibold text-muted-foreground">Contact Name</h1>
              <span>{contact.name}</span>
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="text-xs font-semibold text-muted-foreground">Relationship</h1>
              <span>{contact.relationship}</span>
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="text-xs font-semibold text-muted-foreground">Contact Number</h1>
              <span>{contact.contactNumber}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
