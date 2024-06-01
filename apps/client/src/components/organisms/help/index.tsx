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
              <span className="flex flex-col">
                <span>
                  Email: <b>test@micro.com</b>
                </span>
                <span>
                  Password: <b>123123</b>
                </span>
              </span>
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
