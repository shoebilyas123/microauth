import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { CircleHelp } from 'lucide-react';

export function Help() {
  return (
    <div className="mb-2">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant={'outline'}>
            <CircleHelp />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Login Credentials!</AlertDialogTitle>
            <AlertDialogDescription>
              <p>
                Email: <b>test@micro.com</b>
              </p>
              <p>
                Password: <b>123123</b>
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
