"use client";

import { Button, Checkbox, Label, Modal, ModalBody, ModalHeader, TextInput } from "flowbite-react";

export default function LandingFormModal({ open, setOpen, emailRef }) {
  return (
    <Modal
      show={open}
      size="md"
      popup
      onClose={() => setOpen(false)}
      initialFocus={emailRef}
    >
      <ModalHeader />
      <ModalBody>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-white">Sign in to our platform</h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" className="text-white" />
            </div>
            <TextInput
              id="email"
              ref={emailRef}
              placeholder="name@hotel.com"
              required
              color="dark"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" className="text-white" />
            </div>
            <TextInput id="password" type="password" required color="dark" />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" color="dark" />
              <Label htmlFor="remember" value="Remember me" className="text-white" />
            </div>
            <a
              href="#"
              className="text-blue-500 hover:underline"
            >
              Lost Password?
            </a>
          </div>
          <div className="w-full">
            <Button color="dark">Log in to your account</Button>
          </div>
          <div className="flex justify-between text-sm font-medium text-gray-400">
            Not registered?&nbsp;
            <a href="#" className="text-blue-500 hover:underline">
              Create account
            </a>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}
