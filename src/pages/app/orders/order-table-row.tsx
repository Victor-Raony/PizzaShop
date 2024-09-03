import { Button } from '@/components/ui/button'
import { ArrowLeft, Search, X } from 'lucide-react'
import { TableCell, TableRow } from '@/components/ui/table'
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'
import { OrderDetails } from './order-details'

//export interface OrderTableRowProps{}

export function OrderTableRow() {
  return(
    <TableRow >
        <TableCell>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='outline' size="xs">
                <Search className='h-3 w-3' />
                <span className='sr-only'>Detales do pedido</span>
              </Button>
            </DialogTrigger>

            <OrderDetails />
          </Dialog>
        </TableCell>
        <TableCell className='font-mono text-xs font-medium'>
          31k2j3h1kj2h3k1j2h3k1j2h
        </TableCell>
        <TableCell className='text-muted-foreground'>
          há 15 minutos
        </TableCell>
        <TableCell>
          <div className='flex items-center gap-2'>
            <span className='h-2 w-2 rounded-full bg-slate-400' />
            <span className='font-medium text-muted-foreground'>
              Pendente
            </span>
          </div>
        </TableCell>
        <TableCell className='font-medium'>Victor Raony Moraes Lima</TableCell>
        <TableCell className='font-medium'>R$ 149,98</TableCell>
        <TableCell>
          <Button variant='ghost' size='xs'>
              <ArrowLeft className='mr-2 h-3 w-3' />
              Aprovar
            </Button>
        </TableCell>
        <TableCell>
          <Button variant='ghost' size='xs'>
            <X className='mr-2 h-3 w-3' />
            Cancelar
          </Button>
        </TableCell>
    </TableRow>
  )
}