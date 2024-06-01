import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { AppDispatch } from '@/state/store';
import { login } from '@/state/auth/slice';
import axios from 'axios';

export function LoginComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const loginHandler = async () => {
    try {
      const payload = { email, password };

      const res = await axios.post(
        'http://localhost:8080/api/v1/auth/login',
        payload
      );
      dispatch(login(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Microservices Auth</CardTitle>
        <CardDescription>Enter your credentials to login.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email-login">Email</Label>
              <Input
                id="email-login"
                placeholder="Enter your email..."
                type="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password-login">Password</Label>
              <Input
                id="password-login"
                placeholder="Enter your password..."
                type="password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Register</Button>
        <Button onClick={loginHandler}>Login</Button>
      </CardFooter>
    </Card>
  );
}
