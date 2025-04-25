import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { AuthService } from "@/services/Auth.service";

const signUpSchema = z
  .object({
    name: z.string().nonempty("Nome é obrigatório"),
    email: z.string().nonempty("E-mail é obrigatório").email("Email inválido"),
    password: z
      .string()
      .nonempty("E-mail é obrigatório")
      .min(6, "Mínimo 6 caracteres"),
    confirmPassword: z.string().nonempty("Confirme sua senha"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type FormData = z.infer<typeof signUpSchema>;

export function useSignUpController() {
  const form = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = form.handleSubmit(async (formData) => {
    try {
      const response = await AuthService.signUp({
        name: formData.name,
        password: formData.password,
        email: formData.email,
      });

      toast.success("Seja bem-vindo ao TripMind 🚀");
    } catch {
      toast("Erro ao criar  conta");
    }
  });

  return { form, handleSubmit };
}
