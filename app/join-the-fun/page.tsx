"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Github, Mail } from "lucide-react"

// Form schemas
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  rememberMe: z.boolean().optional(),
})

const registerSchema = z
  .object({
    username: z.string().min(3, { message: "Username must be at least 3 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string(),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export default function JoinTheFun() {
  const [activeTab, setActiveTab] = useState("login")

  // Login form
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  // Register form
  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  })

  // Form submission handlers
  const onLoginSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log("Login data:", data)
    // This would typically call an API endpoint to authenticate the user
    // For now, we'll just log the data
  }

  const onRegisterSubmit = (data: z.infer<typeof registerSchema>) => {
    console.log("Register data:", data)
    // This would typically call an API endpoint to register the user
    // For now, we'll just log the data
  }

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen px-4 py-12 mx-auto">
      <div className="grid w-full max-w-5xl gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="mb-8 space-y-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Join the Blogverse</h1>
            <p className="text-xl text-muted-foreground">
              Connect with writers, share your ideas, and discover amazing content.
            </p>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -z-10 rounded-full w-72 h-72 bg-primary/10 blur-3xl"></div>
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Join the community"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary">1</span>
              </div>
              <p className="font-medium">Create an account or sign in</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary">2</span>
              </div>
              <p className="font-medium">Customize your profile</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary">3</span>
              </div>
              <p className="font-medium">Start writing and connecting</p>
            </div>
          </div>
        </div>

        <div>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Welcome to Blogverse</CardTitle>
              <CardDescription>Sign in to your account or create a new one to get started.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <div className="space-y-4 mt-4">
                    <Form {...loginForm}>
                      <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                        <FormField
                          control={loginForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={loginForm.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                <Input type="password" placeholder="••••••••" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={loginForm.control}
                          name="rememberMe"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>Remember me</FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />

                        <div className="text-right">
                          <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                            Forgot password?
                          </Link>
                        </div>

                        <Button type="submit" className="w-full">
                          Sign In
                        </Button>
                      </form>
                    </Form>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <Separator className="w-full" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="w-full">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Mail className="w-4 h-4 mr-2" />
                        Google
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="register">
                  <div className="space-y-4 mt-4">
                    <Form {...registerForm}>
                      <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-4">
                        <FormField
                          control={registerForm.control}
                          name="username"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Username</FormLabel>
                              <FormControl>
                                <Input placeholder="johndoe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={registerForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={registerForm.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                <Input type="password" placeholder="••••••••" {...field} />
                              </FormControl>
                              <FormDescription>At least 8 characters</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={registerForm.control}
                          name="confirmPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Confirm Password</FormLabel>
                              <FormControl>
                                <Input type="password" placeholder="••••••••" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={registerForm.control}
                          name="terms"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  I agree to the{" "}
                                  <Link href="/terms" className="text-primary hover:underline">
                                    terms and conditions
                                  </Link>
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />

                        <Button type="submit" className="w-full">
                          Create Account
                        </Button>
                      </form>
                    </Form>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <Separator className="w-full" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="w-full">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Mail className="w-4 h-4 mr-2" />
                        Google
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-6">
              <p className="text-sm text-muted-foreground">
                By continuing, you acknowledge that you have read and understand our{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>
                .
              </p>
            </CardFooter>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Button variant="link" className="p-0" onClick={() => setActiveTab("login")}>
                Sign in
              </Button>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="mb-4 text-2xl font-bold">What You'll Get</h2>
        <div className="grid gap-6 mt-8 md:grid-cols-3">
          <div className="p-4">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10">
              <ArrowRight className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-medium">Personalized Feed</h3>
            <p className="text-muted-foreground">Discover content tailored to your interests and preferences.</p>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10">
              <ArrowRight className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-medium">Writing Tools</h3>
            <p className="text-muted-foreground">Access powerful tools to create, edit, and publish your content.</p>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10">
              <ArrowRight className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-medium">Community</h3>
            <p className="text-muted-foreground">Connect with like-minded individuals and grow your network.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

