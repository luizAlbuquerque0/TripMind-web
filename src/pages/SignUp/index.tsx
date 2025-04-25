import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useSignUpController } from "./useSignUpController";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SignUp() {
  const { form, handleSubmit } = useSignUpController();

  return (
    <div className="flex flex-col min-h-screen justify-center   bg-cover bg-center w-full ">
      <h1 className="text-4xl font-bold">Criar conta</h1>
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-4 my-4 w-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="seu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="******" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="******" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full h-10">Criar</Button>
        </form>
      </Form>
    </div>
  );
}
