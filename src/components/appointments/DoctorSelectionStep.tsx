import { useAvailableDoctors } from "@/hooks/use-doctors";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { MapPinIcon, PhoneIcon, StarIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { DoctorCardsLoading } from "./DoctorCardsLoading";

interface DoctorSelectionStepProps {
  selectedDentistId: string | null;
  onSelectDentist: (dentistId: string) => void;
  onContinue: () => void;
}

export function DoctorSelectionStep({
  onContinue,
  onSelectDentist,
  selectedDentistId,
}: DoctorSelectionStepProps) {
  const { data: dentists = [], isLoading } = useAvailableDoctors();

  if (isLoading)
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Choose Your Dentist</h2>
        <DoctorCardsLoading />
      </div>
    );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Choose Your Dentist
          </h2>
          <p className="text-muted-foreground mt-1">
            Select a professional for your appointment
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            onClick={() => onSelectDentist(dentist.id)}
            className={`group cursor-pointer border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
              selectedDentistId === dentist.id
                ? "ring-2 ring-primary border-primary shadow-lg"
                : "hover:border-primary/40"
            }`}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-yellow-400 to-orange-500 text-xl font-bold text-white shadow-md">
                  {dentist.name?.charAt(0).toUpperCase()}
                </div>

                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg truncate">
                    {dentist.name}
                  </CardTitle>

                  <CardDescription className="text-primary font-medium mt-1">
                    {dentist.speciality || "General Dentistry"}
                  </CardDescription>

                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-semibold">5.0</span>
                    </div>

                    <span className="text-sm text-muted-foreground">
                      ({dentist.appointmentCount} appointments)
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPinIcon className="w-4 h-4 shrink-0" />
                  <span>DentiQ Dental Clinic</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <PhoneIcon className="w-4 h-4 shrink-0" />
                  <span>{dentist.phone}</span>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {dentist.bio ||
                  "Experienced dental professional dedicated to providing high-quality patient care and comfortable treatment experiences."}
              </p>

              <div className="flex items-center justify-between pt-2">
                <Badge
                  variant="secondary"
                  className="rounded-full px-3 py-1"
                >
                  Licensed Professional
                </Badge>

                {selectedDentistId === dentist.id && (
                  <div className="text-sm font-medium text-primary">
                    Selected
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedDentistId && (
        <div className="flex justify-end pt-4">
          <Button size="lg" onClick={onContinue}>
            Continue to Time Selection
          </Button>
        </div>
      )}
    </div>
  );
}

export default DoctorSelectionStep;