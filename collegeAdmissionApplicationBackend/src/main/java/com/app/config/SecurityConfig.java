package com.app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;

@SuppressWarnings("deprecation")
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
		@Override
		protected void configure(AuthenticationManagerBuilder auth) throws Exception {
			auth.inMemoryAuthentication().withUser("roshan").password("{noop}roshan").roles("ADMIN");
//			auth.inMemoryAuthentication().withUser("roshan").password("roshan").roles("USER");
		}
	
		
		
		//Security for all api
//		@Override
//		protected void configure(HttpSecurity http) throws Exception {
//			http.csrf().disable();
//			http.authorizeRequests().anyRequest().fullyAuthenticated().and().httpBasic();
//		}
		
		//Security based URL
		@Override
		protected void configure(HttpSecurity http) throws Exception {
			http.cors();
			http.csrf().disable();
			http.authorizeRequests().antMatchers("/home","/**").fullyAuthenticated().and().httpBasic();
		}
		
//		@Bean
//		public static NoOpPasswordEncoder passwordEncoder()
//		{
//			return (NoOpPasswordEncoder) NoOpPasswordEncoder.getInstance();
//		}
	
	}





//	@Bean
//	public UserDetailsService userDetailsService()
//	{
////		UserDetails adminUser=User.withUsername("roshan").password("admin").roles("admin").build();
//		
//		InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager(); 
//		manager.createUser(User.withDefaultPasswordEncoder().username("roshan").password("roshan").roles("ADMIN").build());
//		return manager;
//	}
////	
////	@Bean
////	public PasswordEncoder encoder() {
////		return new BCryptPasswordEncoder();
////	}
//	
//	@Bean
//	public SecurityFilterChain securityfilterChain(HttpSecurity http) throws Exception
//	{
//		http.cors().and()
//		.csrf()
//		.disable()
//		.authorizeRequests()
//		.antMatchers("/login","/home").permitAll()
//		.antMatchers("/edit").permitAll().antMatchers(HttpMethod.OPTIONS).permitAll()
//		.antMatchers(HttpMethod.GET).permitAll()
//		.antMatchers(HttpMethod.POST).permitAll()
//		.anyRequest().authenticated().and().httpBasic();
//		
//		
//		
//		return http.build();
//	}
//	
//	@Bean
//	public AuthenticationManager authenticatonMgr(AuthenticationConfiguration config) throws Exception {
//		return config.getAuthenticationManager();
//	}
//	
////	@Override
////	protected void configure(HttpSecurity http) throws Exception{
////		http.cors();
////		http.csrf().disable().authorizeRequests().antMatchers("/**").fullyAuthenticated().and().httpBasic();
////	}
////	
////	@Override
////	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
////		auth.inMemoryAuthentication().withUser("roshan").password("{noop}roshan").roles("USER");
////	}
//}
