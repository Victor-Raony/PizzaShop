import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow  } from "@/components/ui/table";

//export interface OrderDetailsProps{}

export function OrderDetails() {
  return(
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 12312312</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className=" flex justify-end">
                <div className='flex items-center gap-2'>
                  <span className='h-2 w-2 rounded-full bg-slate-400' />
                  <span className='font-medium text-muted-foreground'>
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className=" flex justify-end">
                Victor Raony
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className=" flex justify-end">
                (66) 9 9999-9999
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className=" flex justify-end">
                victorraony@gamil.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Realizado há</TableCell>
              <TableCell className=" flex justify-end">
                há 3 minutos
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produtos</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza Pepperoni Familia</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 69,99</TableCell>
              <TableCell className="text-right">R$ 139,98</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Pizza Mussarela Familia</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 59,99</TableCell>
              <TableCell className="text-right">R$ 119,98</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className="text-right font-medium">R$ 249,97</TableCell>
            </TableRow>
          </TableFooter>
        </Table>

      </div>
    </DialogContent>
  )
}