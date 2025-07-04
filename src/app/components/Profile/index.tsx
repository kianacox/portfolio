import Image from 'next/image';
import styles from './index.module.scss';
import Headline from '../Headline';
import React from 'react';

const ProfileComponent: React.FC = () => {
  return (
    <section data-testid="profile" role="region" aria-label="Profile Information">
      <div className={styles.avatarContainer}>
        <Image
          alt="A picture of Kiana Cox in anime style"
          src="/avatar1.png"
          className={styles.profilePicture}
          width={150}
          height={200}
          priority
        />
        <h1 className={styles.name} id="profile-name">
          Kiana Cox
        </h1>
      </div>
      <div className={styles.profileCardContent}>
        <h2 className={styles.titles} id="profile-titles">
          Titles
        </h2>
        <Headline />

        <h2 className={styles.about} id="profile-summary">
          Summary
        </h2>
        <p
          className={styles.summary}
          aria-labelledby="profile-summary"
          data-testid="profile-summary"
        >
          Front-End Engineer, Level 4. Specialises in React/Redux builds, critical hits in unit
          testing, and stealth refactors during code freeze. Former Sky Casino alchemist, now
          spec&rsquo;d into cross-brand code wizardry. Buffs entire squad with clean UI components
          and test coverage auras. Weak to flaky tests, resistant to Jira chaos.
        </p>
        <h2 className={styles.strengths} id="profile-strengths" data-testid="profile-strengths">
          Strengths
        </h2>
        <ul aria-labelledby="profile-strengths" data-testid="profile-strengths-list">
          <li className={styles.strengthsItem}>
            <p className={styles.strengthsText}>
              <strong className={styles.strengthBold}>React Mastery</strong>: +10 to component
              composition, hooks, and not yelling at state.
            </p>
          </li>
          <li className={styles.strengthsItem}>
            <p className={styles.strengthsText}>
              <strong className={styles.strengthBold}>Testing Strategist</strong>: Deals double
              damage to brittle tests.
            </p>
          </li>
          <li className={styles.strengthsItem}>
            <p className={styles.strengthsText}>
              <strong className={styles.strengthBold}>Pixel-Perfect Precison</strong>: Styles UI
              with sniper-like accuracy. Can smell a misaligned button from 300px away.
            </p>
          </li>
          <li className={styles.strengthsItem}>
            <p className={styles.strengthsText}>
              <strong className={styles.strengthBold}>Party Support</strong>: Mentors allies,
              reviews PRs, and boosts team morale with moderately funny one-liners.
            </p>
          </li>
          <li className={styles.strengthsItem}>
            <p className={styles.strengthsText}>
              <strong className={styles.strengthBold}>Incident Mage</strong>: Casts grep and
              restart-service during on-call battles. Specialises in Grafana scrying and AWS
              rituals.
            </p>
          </li>
        </ul>
        <h2 className={styles.weaknesses} id="profile-weaknesses" data-testid="profile-weaknesses">
          Weaknesses
        </h2>
        <ul aria-labelledby="profile-weaknesses" data-testid="profile-weaknesses-list">
          <li className={styles.weaknessItem}>
            <p className={styles.weaknessText}>
              <strong className={styles.weaknessBold}>Delicious Baked Treats</strong>: Morale boost:
              +10. Gym debuff: -10.
            </p>
          </li>
          <li className={styles.weaknessItem}>
            <p className={styles.weaknessText}>
              <strong className={styles.weaknessBold}>Refactor Temptation</strong>: Sees legacy code
              and hears the siren song of &quot;I could just clean this up a bit...&quot;
            </p>
          </li>
          <li className={styles.weaknessItem}>
            <p className={styles.weaknessText}>
              <strong className={styles.weaknessBold}>Overthinking</strong>: Sometimes spends more
              time naming a variable than writing the function.
            </p>
          </li>
          <li className={styles.weaknessItem}>
            <p className={styles.weaknessText}>
              <strong className={styles.weaknessBold}>Game Tunnel Vision</strong>: Finds One Game to
              Rule Them All™ and disappears into it for weeks. Will emerge with lore knowledge,
              build guides, and themed desktop backgrounds.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

const Profile = React.memo(ProfileComponent);
export default Profile;
