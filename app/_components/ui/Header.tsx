import { MenuIcon } from 'lucide-react';
import { Button } from './button';
import {Card, CardContent} from './card'
import Image from 'next/image'
const Header = () => {
  return (
    <Card>
      <CardContent className='p-5 justify-between itens-center flex flex-row'>
      <Image src="/img/logo.png" alt="FSW Barber" height={22} width={140}>
      </Image>
      <Button variant="outline" size="icon">
        <MenuIcon size={16}/>
      </Button>
      </CardContent>
    </Card>
  )
}
 
export default Header;