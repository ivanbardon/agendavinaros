
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  import { getPharmacyForDate } from "../utils/pharmacyUtils";
  
  export default function TarjetaGuardia() {
    const pharmacy = getPharmacyForDate(new Date());
    return (
      <Card className="w-10/12">
        <CardHeader className="flex flex-row items-center">
        <Avatar>
            <AvatarImage src={pharmacy.logo} />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
          <CardTitle className="text-2xl font-bold">{pharmacy.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{pharmacy.address}</p>
          <p>{pharmacy.phone}</p>
        </CardContent>
      </Card>
    );
  }
