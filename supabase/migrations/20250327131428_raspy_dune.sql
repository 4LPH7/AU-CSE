/*
  # Create faculty profiles and authentication setup

  1. New Tables
    - `faculty_profiles`
      - `id` (uuid, primary key, matches auth.users.id)
      - `staff_id` (text, unique)
      - `name` (text)
      - `designation` (text)
      - `department` (text)
      - `email` (text)
      - `qualification` (text)
      - `specialization` (text)
      - `date_of_birth` (date)
      - `date_of_joining` (date)
      - `office_address` (text)
      - `mobile` (text)
      - `image_url` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `faculty_profiles` table
    - Add policies for authenticated users
*/

-- Create faculty_profiles table
CREATE TABLE IF NOT EXISTS faculty_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  staff_id text UNIQUE NOT NULL,
  name text NOT NULL,
  designation text,
  department text,
  email text,
  qualification text,
  specialization text,
  date_of_birth date,
  date_of_joining date,
  office_address text,
  mobile text,
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE faculty_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Faculty can view all profiles"
  ON faculty_profiles
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Faculty can update own profile"
  ON faculty_profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Create function to handle profile updates
CREATE OR REPLACE FUNCTION handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON faculty_profiles
  FOR EACH ROW
  EXECUTE FUNCTION handle_updated_at();