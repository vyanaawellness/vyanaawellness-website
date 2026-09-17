CREATE TABLE IF NOT EXISTS webinar_registrations (
  id TEXT PRIMARY KEY,
  webinar_id TEXT NOT NULL,
  name TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  email TEXT NOT NULL,
  city_state TEXT,
  age_group TEXT,
  gender TEXT,
  fasting_experience TEXT NOT NULL,
  primary_goals TEXT NOT NULL,
  fasting_pattern TEXT,
  fasting_symptoms TEXT,
  learning_interests TEXT NOT NULL,
  question TEXT,
  referral_source TEXT,
  educational_consent INTEGER NOT NULL,
  webinar_updates_consent INTEGER NOT NULL,
  marketing_consent INTEGER NOT NULL,
  notification_status TEXT NOT NULL DEFAULT 'pending',
  confirmation_status TEXT NOT NULL DEFAULT 'pending',
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_webinar_registrations_email
ON webinar_registrations(email);

CREATE INDEX IF NOT EXISTS idx_webinar_registrations_created_at
ON webinar_registrations(created_at);