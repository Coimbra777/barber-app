import { Badge } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
  return (
    <Card>
      <CardContent>
        <div>
          <Badge>Confirmado</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
