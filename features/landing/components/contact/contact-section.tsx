'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';
import { Phone, Mail, MapPin } from 'lucide-react';

// Validation schema
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required').min(2, 'First name must be at least 2 characters'),
  lastName: Yup.string().required('Last name is required').min(2, 'Last name must be at least 2 characters'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9\s\-\+\(\)]+$/, 'Invalid phone number format'),
  message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactInfoCard = ({ icon: Icon, title, content }: { icon: React.ComponentType<{ className: string }>; title: string; content: string }) => (
  <div className='flex flex-col md:flex-col items-start gap-[16px] p-[24px] bg-secondary rounded-lg'>
    <Icon className='w-[48px] h-[48px] text-primary flex-shrink-0 mt-1' />
    <div className='space-y-[8px]'>
      <h3 className='text-[22px] font-[500] text-black'>{title}</h3>
      <p className='text-[22px] font-[300] text-black'>{content}</p>
    </div>
  </div>
);

export function ContactSection() {
  const initialValues: ContactFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const handleSubmit = async (
    values: ContactFormValues,
    { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void },
  ) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        toast.error(data.error || 'Something went wrong. Please try again or email us directly.');
        return;
      }
      toast.success(data.message || 'Thank you for your message! We will respond shortly.');
      resetForm();
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send your message. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className='py-20 px-6 md:px-12 bg-white'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Left Column - Contact Info */}
          <div className='space-y-[32px]'>
            <div className='space-y-[20px]'>
              <h2 className='text-[60px] font-[500] text-black'>
                Contact <span className='text-primary'>Us</span>
              </h2>
              <p className='text-[22px] font-[300] leading-relaxed'>Have a project in mind or need a technical quote?</p>
              <p className='text-[22px] font-[300] leading-relaxed'>
                Get in touch with our team to discuss your requirements. We'll review your details and respond with the right solution for your
                operation.
              </p>
            </div>

            <div className='space-y-[32px]'>
              <ContactInfoCard icon={Phone} title='Phone Number' content='+1 (000) 000 0000' />
              <ContactInfoCard icon={Mail} title='Our Email' content='orders@jobformes.com.au' />
              <ContactInfoCard icon={MapPin} title='Visit Us' content='285 Penn Ave 9th Floor, CA' />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className='bg-secondary p-[32px] rounded-[24px] space-y-[20px]'>
            <h3 className='text-[36px] font-[500] text-black'>Request a Technical Quote</h3>
            <p className='text-[22px] font-[300] text-black'>
              Share your project details below and our engineering team will respond promptly with a tailored quotation.
            </p>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              {({ isSubmitting, touched, errors }) => (
                <Form className='space-y-[32px]'>
                  <div className='space-y-[24px]'>
                    {/* First Name */}
                    <div>
                      <Field
                        as='input'
                        type='text'
                        name='firstName'
                        placeholder='First Name'
                        className={`w-full px-[32px] py-[24px] rounded-[24px] border transition-colors placeholder:text-black/50 text-[22px] font-[300] ${
                          touched.firstName && errors.firstName ? 'border-destructive bg-destructive/10' : 'border-secondary bg-white'
                        } focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
                      />
                      <ErrorMessage name='firstName'>{(msg) => <p className='text-destructive text-sm mt-1'>{msg}</p>}</ErrorMessage>
                    </div>

                    {/* Last Name */}
                    <div>
                      <Field
                        as='input'
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                        className={`w-full px-[32px] py-[24px] rounded-[24px] border transition-colors placeholder:text-black/50 text-[22px] font-[300] ${
                          touched.lastName && errors.lastName ? 'border-destructive bg-destructive/10' : 'border-secondary bg-white'
                        } focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
                      />
                      <ErrorMessage name='lastName'>{(msg) => <p className='text-destructive text-sm mt-1'>{msg}</p>}</ErrorMessage>
                    </div>

                    {/* Email */}
                    <div>
                      <Field
                        as='input'
                        type='email'
                        name='email'
                        placeholder='Email'
                        className={`w-full px-[32px] py-[24px] rounded-[24px] border transition-colors placeholder:text-black/50 text-[22px] font-[300] ${
                          touched.email && errors.email ? 'border-destructive bg-destructive/10' : 'border-secondary bg-white'
                        } focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
                      />
                      <ErrorMessage name='email'>{(msg) => <p className='text-destructive text-sm mt-1'>{msg}</p>}</ErrorMessage>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <Field
                        as='input'
                        type='tel'
                        name='phone'
                        placeholder='Phone Number'
                        className={`w-full px-[32px] py-[24px] rounded-[24px] border transition-colors placeholder:text-black/50 text-[22px] font-[300] ${
                          touched.phone && errors.phone ? 'border-destructive bg-destructive/10' : 'border-secondary bg-white'
                        } focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
                      />
                      <ErrorMessage name='phone'>{(msg) => <p className='text-destructive text-sm mt-1'>{msg}</p>}</ErrorMessage>
                    </div>

                    {/* Message */}
                    <div>
                      <Field
                        as='textarea'
                        name='message'
                        placeholder='How can we help?'
                        rows={4}
                        className={`w-full px-[32px] py-[24px] rounded-[24px] border transition-colors resize-none placeholder:text-black/50 text-[22px] font-[300] ${
                          touched.message && errors.message ? 'border-destructive bg-destructive/10' : 'border-secondary bg-white'
                        } focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
                      />
                      <ErrorMessage name='message'>{(msg) => <p className='text-destructive text-sm mt-1'>{msg}</p>}</ErrorMessage>
                    </div>
                  </div>
                  {/* Submit Button */}
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full bg-primary hover:bg-primary/80 text-white font-[500] py-[24px] px-[40px] rounded-[100px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
