import { useAvailableDoctors } from "@/hooks/use-doctors";

function DoctorInfo({ doctorId }: { doctorId: string }) {
  const { data: doctors = [] } = useAvailableDoctors();
  const doctor = doctors.find((d) => d.id === doctorId);

  if (!doctor) return null;

  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-yellow-400 to-orange-500 text-lg font-bold text-white shadow-md">
        {doctor.name?.charAt(0).toUpperCase()}
      </div>

      <div>
        <h3 className="font-medium text-white">
          {doctor.name}
        </h3>

        <p className="text-sm text-orange-400">
          {doctor.speciality || "General Dentistry"}
        </p>
      </div>
    </div>
  );
}

export default DoctorInfo;