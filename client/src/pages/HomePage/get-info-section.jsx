import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  mobile: z.string().min(10, {
    message: "Please enter a valid mobile number.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  captcha: z.string().min(1, {
    message: "Please complete the captcha.",
  }),
});

export default function ContactSection() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      message: "",
      captcha: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    // Handle form submission here
  }

  return (
    <section className=" px-4 py-10 bg-muted/20 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-12">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-foreground">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your full name"
                          className="bg-muted/50 h-11 border-muted-foreground/20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-foreground">
                          Mobile
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your phone number"
                            className="bg-muted/50 h-11 border-muted-foreground/20"
                            {...field}
                          />
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
                        <FormLabel className="text-sm font-semibold text-foreground">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            className="bg-muted/50 h-11 border-muted-foreground/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-foreground">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write your message here..."
                          className="bg-muted/50 h-11 border-muted-foreground/20 min-h-[120px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="captcha"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-foreground">
                        Captcha
                      </FormLabel>
                      <div className="flex gap-3">
                        <FormControl>
                          <Input
                            placeholder="Enter captcha"
                            className="bg-muted/50 h-11 border-muted-foreground/20 flex-1"
                            {...field}
                          />
                        </FormControl>
                        <div className="bg-muted/50 h-11 border border-muted-foreground/20 px-6 py-2 rounded-md flex items-center justify-center min-w-[120px] font-mono text-lg font-semibold">
                          AB12CD
                        </div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto min-w-[200px] text-base py-5 font-semibold"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Address</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className="text-sm md:text-base text-foreground/80 leading-relaxed">
                    <p className="font-semibold text-foreground">First floor,</p>
                    <p>2B Yinusa Adeniji Street, opposite St. James Church,</p>
                    <p>Unity Road, Off Toyin Street, Ikeja,</p>
                    <p>Lagos, Nigeria.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="text-sm md:text-base text-foreground/80">
                    <p>+234 802 950 1995</p>
                    <p>+234 814 041 7500</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:hello@anchorsoftacademy.com"
                    className="text-sm md:text-base text-primary hover:underline font-semibold"
                  >
                    hello@anchorsoftacademy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}